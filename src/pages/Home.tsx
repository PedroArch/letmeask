import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import signinIconImg from '../assets/images/signin-icon.svg'
import Button from '../components/Button'

import '../styles/home.scss'

function Home() {
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
          <button type="button" className="create-room">
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
