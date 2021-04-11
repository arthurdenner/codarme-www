import { useState } from 'react'
import { Logo } from '~/components/Logo'
import { Button } from '~/components/Button'



export const Modal = () => {
  const [visible, setVisible] = useState(true)
  return (
    visible ? 
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-4 md:p-0"
    >
    <div className="relative w-auto my-6 mx-auto max-w-2xl bg-gunmetal">
    
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gunmetal outline-none focus:outline-none">
     
        <div className="flex items-center justify-center p-5 rounded-t">
          <img src="/img/curso-logo.png" />
          <button
            className="p-1 absolute right-0 top-0 bg-transparent border-0 text-black text-8xl font-semibold outline-none focus:outline-none"
            onClick={() => setVisible(false)}
          >
            <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
    
        <div className="relative px-4 md:px-24 text-center text-white flex-auto flex flex-col items-center justify-center">
          <p className="my-4 text-2xl">
          Torne-se um profissional acima da média e requisitado pelo mercado.
          </p>
          <p className="my-4  text-lg text-lighterGray">
          Aprenda a desenvolver um software de verdade, de qualidade, com quem tem muita experiência prática.
          </p>
          <div className="md:w-2/4 w-full mt-8">
          <a href="/inscricoes">
            <Button>
              <p className="text-white font-bold">
                Garantir minha vaga
              </p>
            </Button>
          </a>
          </div>
        </div>
        <div className="flex items-center justify-end p-4 rounded-b">
         <Logo color="white" width={120}/>
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black" />
  </>
  : <></>
  )
}