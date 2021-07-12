import { useParams } from 'react-router-dom'

import useRoom from '../hooks/useRoom'

import Question from '../components/Question'
import RoomCode from '../components/RoomCode'
import Button from '../components/Button'


import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'

type RoomParams = {
  id: string;
}

function AdminRoom() {
  const { id } = useParams<RoomParams>()

  const { questions, title } = useRoom(id)

  return (
    <div id="page-room">
      <header>
        <div className='content'>
          <img src={logoImg} alt="Letmeask"/>
          <div>
            <RoomCode code={id}/>
            <Button isOutlined>Encerrar Sala</Button>
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
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default AdminRoom
