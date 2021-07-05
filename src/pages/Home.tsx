import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import signinIconImg from '../assets/images/signin-icon.svg'
import Button from '../components/Button'

import '../styles/home.scss'
import { useAuth } from '../hooks/useAuth'



function Home() {
  const history = useHistory()

  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }


  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas"/>
        <strong>Toda pergunta tem uma resposta</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo google" />
            Crie sua sala com Google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
          <Button type="submit">
            <img src={signinIconImg} alt="Seta indicando signin"/>
            Entrar na sala
          </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home
