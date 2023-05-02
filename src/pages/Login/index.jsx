import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import ButtonOrange from 'components/ButtonOrange'

import logo from 'assets/pigz-logotipo-branco.png'
import ButtonGoogle from 'components/ButtonGoogle'
import Input from 'components/Input'
import UserContext from 'common/User'
import useHooks from 'hooks/hooks'

const { width, height } = Dimensions.get('window')


export default function Login() {

  const { navigates } = useHooks()
  const { getUser } = useContext(UserContext)

  const [ login, setLogin ] = useState({
    Email: '',
    Password: ''
  })

  const handleLogin = () => {
    getUser(login.Email, login.Password)
    navigates('Home')
  }
  
  return (
    <View style={style.login}>
      <View style={style.title}>
        <Image source={logo} />
        <Text style={style.titleNormal}>Para entregadores</Text>
      </View>
      <View style={style.container}>
        <View style={style.contentForm}>
          <Text style={style.formText}>Login</Text>
          <View>
            <Input
            label="Email ou Telefone"
            placeholder="example@pigz.com.br"
            value={login.Email}
            onChange={(value) => { setLogin((prevForm) => ({...prevForm, Email: value}))}}
            />
            <Input
            label="Senha"
            placeholder="********"
            value={login.Password}
            onChange={(value) => { setLogin((prevForm) => ({...prevForm, Password: value}))}}
            />
          </View>
          <Text style={style.password}>Esqueci minha senha</Text>
          <ButtonOrange route='Home' onClick={handleLogin}>Entrar</ButtonOrange>
        </View>
        <View style={style.signup}>
          <Text style={style.signupText}>Não tem uma Conta? <Text style={style.orangeText}>Criar agora!</Text></Text>
        </View>
        <View style={style.loginWith}>
          <View style={style.contentLogin}>
            <Text style={{color: '#333333', fontWeight: 'bold'}}>Entrar com</Text>
            <View style={style.lineGray}/>
          </View>
          <ButtonGoogle>Continuar com o Google</ButtonGoogle>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  login: {
    width: width,
    height: height,
    flexDirection: 'column'
  },
  title: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleNormal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333'
  },
  container: {
    marginHorizontal: 15,
  },
  contentForm: {
    marginTop: 30
  },
  formText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  password: {
    textDecorationLine: 'underline',
    marginVertical: 25
  },
  signup: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orangeText: {
    color: '#FA641E'
  },
  loginWith: {
    marginTop: 40,
  },
  lineGray: {
    height: 1,
    marginLeft: 15,
    width: '75%',
    backgroundColor: '#707070'
  },
  contentLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  }
})