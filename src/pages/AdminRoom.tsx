import { useHistory, useParams } from 'react-router-dom'

import useRoom from '../hooks/useRoom'

import Question from '../components/Question'
import RoomCode from '../components/RoomCode'
import Button from '../components/Button'


import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'

import '../styles/room.scss'
import { database } from '../services/firebase'

type RoomParams = {
  id: string;
}

function AdminRoom() {
  const { id } = useParams<RoomParams>()

  const history = useHistory()

  const { questions, title } = useRoom(id)

  async function handleEndRoom() {
    await database.ref(`rooms/${id}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
     await database.ref(`rooms/${id}/questions/${questionId}`).remove()
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className='content'>
          <img src={logoImg} alt="Letmeask"/>
          <div>
            <RoomCode code={id}/>
            <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className='room-title'>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>
        <div className="question-list">
          {questions.map(question => {
            return (
              <Question key={question.id}
                content={question.content}
                author={question.author}  
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="apaga pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default AdminRoom
