import styled from 'styled-components'
import './App.css'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three'
import { useCallback, useEffect, useRef } from 'react'
import { publicUrl } from './lib/url'

export default function App() {
  const containerRef = useRef()
  const rendererRef = useRef()
  const cameraRef = useRef()

  useEffect(() => {
    const { current: container } = containerRef

    if (container) {
      const { clientWidth, clientHeight } = container
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(clientWidth, clientHeight)
      container.appendChild(renderer.domElement)
      rendererRef.current = renderer

      const scene = new THREE.Scene()

      let obj = null

      const camera = new THREE.PerspectiveCamera(
        10,
        clientWidth / clientHeight,
        0.1,
        5000
      )
      camera.position.set(0, 0, 300)
      cameraRef.current = camera

      camera.lookAt(-25, 0, 0)

      const animate = () => {
        requestAnimationFrame(animate)

        // Spin planet
        if (obj) {
          const time = Date.now() * 0.0001
          obj.rotation.y = -0.4 * time
        }

        renderer.render(scene, camera)
      }

      const loader = new GLTFLoader()

      loader.load(publicUrl('/planet-1.gltf'), (gltf) => {
        obj = gltf.scene

        obj.traverse(function (child) {
          if (child.isMesh) {
            if (child.userData.name === 'earth') {
              child.material.color.setHex(0x181818)
            }

            child.material.metalness = 0.7
            const scale = 2
            child.scale.set(scale, scale, scale)
          }
        })

        scene.add(obj)

        animate()
      })

      const lightOne = new THREE.DirectionalLight(0xcccccc)
      lightOne.position.set(-1.5, -1, 1)
      lightOne.intensity = 1.5
      scene.add(lightOne)

      const lightTwo = new THREE.DirectionalLight(0xffffff)
      lightTwo.position.set(0, 0, 1)
      lightTwo.intensity = 0.9
      scene.add(lightTwo)

      return () => {
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

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

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [resizeCanvas])

  return (
    <div className="App">
      <SceneContainer ref={containerRef} />
    </div>
  )
}

const SceneContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`
