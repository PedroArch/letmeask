import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import Button from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

import '../styles/newroom.scss'

function NewRoom() {

  const history = useHistory()

  const { user } = useAuth()

  const [newRoomName, setNewRoomName] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoomName.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoomName,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Digite o nome da sala"
              value={newRoomName}
              onChange={(event) => setNewRoomName(event.target.value)}
            />
          <Button type="submit">
            Criar sala
          </Button>
          </form>
          <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}

export default NewRoom
