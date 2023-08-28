import { React, createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('https://api.xor.cl/sismo/recent')
      const sismos = await response.json()
      setData(sismos)
    } catch (error) {
      console.error(error)
      throw new Error
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [])

  if (!data) {
    return <View><Text>Loading...</Text></View>
  }

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  )
}

export const useContx = () => useContext(Context)