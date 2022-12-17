import styled from 'styled-components'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three'
import { useCallback, useEffect, useRef, useState } from 'react'
import { publicUrl } from '../lib/url'
import gsap from 'gsap'

const GROW_ANIMATION_DURATION_SECS = 1.8

export default function Background({ expanded }) {
  const containerRef = useRef()
  const rendererRef = useRef()
  const cameraRef = useRef()
  const [planet, setPlanet] = useState(null)

  const rotationSpeedRef = useRef(1)

  // Load 3D model of planet
  useEffect(() => {
    const { current: container } = containerRef
    if (!container) {
      return
    }

    const { clientWidth, clientHeight } = container
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(clientWidth, clientHeight)
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      10,
      clientWidth / clientHeight,
      0.1,
      5000
    )
    camera.position.set(0, 0, 500)
    cameraRef.current = camera

    camera.lookAt(-25, 0, 0)

    let model = null

    // Animate function called for every frame
    const animate = () => {
      window.requestAnimationFrame(animate)

      // Spin planet
      if (model) {
        model.rotation.y -= rotationSpeedRef.current * 0.001
      }

      renderer.render(scene, camera)
    }

    const loader = new GLTFLoader()

    // Load our planet 3d model
    loader.load(publicUrl('/planet-1.gltf'), (gltf) => {
      model = gltf.scene
      setPlanet(model)

      model.traverse(function (child) {
        if (!child.isMesh) {
          return
        }

        // Color earth (land) parts a dark grey
        if (child.userData.name === 'earth') {
          child.material.color.setHex(0x181818)
        }

        child.material.metalness = 0.7
        const scale = 2.5
        child.scale.set(scale, scale, scale)
      })

      scene.add(model)

      // Kick off render, and animation...
      animate()
    })

    // Add light to see object...
    const lightOne = new THREE.DirectionalLight(0xcccccc)
    lightOne.position.set(-1.5, -1, 1)
    scene.add(lightOne)

    const lightTwo = new THREE.DirectionalLight(0xffffff)
    lightTwo.position.set(0, 0, 1)
    scene.add(lightTwo)

    return () => {
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  // Fill canvas to browser width...
  const resizeCanvas = useCallback(() => {
    const { current: renderer } = rendererRef
    const { current: container } = containerRef
    if (container && renderer) {
      const width = container.clientWidth
      const height = container.clientHeight
      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()

      renderer.setSize(width, height)
    }
  }, [])

  // Bind resize event to re-draw canvas
  useEffect(() => {
    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [resizeCanvas])

  // Handle expanded state to scale planet
  useEffect(() => {
    if (!planet) {
      return
    }

    const scale = expanded ? 10 : 1

    gsap.to(planet.scale, {
      duration: GROW_ANIMATION_DURATION_SECS,
      x: scale,
      y: scale,
      z: scale,
      ease: 'power1.inOut',
    })

    // Adjust rotation speed according to zoom
    gsap.to(rotationSpeedRef, {
      duration: GROW_ANIMATION_DURATION_SECS,
      current: expanded ? 0.1 : 1, // Slow down animation to 1/10th when zoomed
      ease: 'none', // Linear
    })
  }, [expanded, planet])

  return <Container ref={containerRef} />
}

const Container = styled.div`
  z-index: -1;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`
