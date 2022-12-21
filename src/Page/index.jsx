import AppBar from './AppBar'

export default function Page({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  )
}
