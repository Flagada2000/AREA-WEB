import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faFile, faLock, faMessage, faPen, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className="h-[900px] w-[500px] px-[60px] py-[15px] flex-col justify-center items-center gap-[30px] flex">
          <div className="text-blue-100 text-3xl font-bold font-inter">Profil</div>
          <div className="flex-col justify-start items-center gap-[15px] flex">
              <img className="w-[120px] h-[120px] relative rounded-[999px]" src="https://via.placeholder.com/120x120" />
              <button className="w-[34px] h-[34px] p-1.5 bg-blue-100 rounded-[999px] flex-col justify-center items-center gap-2.5 flex hover:bg-blue-200">
                <div className="w-4 h-4 relative">
                  <FontAwesomeIcon icon={faPen} className="text-blue-800 transform" />
                </div>
              </button>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="text-blue-100 text-xl font-bold font-inter">Emma Depierre</div>
            <button className="group w-4 h-4 relative">
              <FontAwesomeIcon icon={faPen} className="text-blue-100 transform group-hover:text-blue-300" />
            </button>
          </div>
          <div className="self-stretch h-[103px] flex-col justify-start items-center gap-[15px] flex">
              <button className="self-stretch px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex hover:bg-blue-200">
                  <div className="w-4 h-4 relative">
                        <FontAwesomeIcon icon={faEnvelope} className="text-slate-500 transform" />
                  </div>
                  <div className="text-slate-500 text-sm font-semibold font-inter">emmadepierre@gmail.com</div>
              </button>
              <div className="self-stretch px-5 py-2.5 bg-blue-100 rounded-[999px] justify-between items-center inline-flex hover:bg-blue-200">
                  <div className="h-6 justify-start items-center gap-[15px] flex">
                      <div className="w-4 h-4 relative">
                            <FontAwesomeIcon icon={faLock} className="text-slate-500 transform" />
                      </div>
                      <div className="text-slate-500 text-sm font-medium font-inter">● ● ● ● ● ● ● ●</div>
                  </div>
                  <button className="group w-4 h-4 relative">
                    <FontAwesomeIcon icon={faEye} className="text-slate-500 transform group-hover:text-blue-300" />
                  </button>
              </div>
          </div>
          <div className="self-stretch h-[0px] border border-blue-900"></div>
          <div className="self-stretch h-[162px] flex-col justify-start items-center gap-[15px] flex">
              <button className="self-stretch px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex hover:bg-blue-200">
                  <div className="w-4 h-4 relative">
                    <FontAwesomeIcon icon={faSun} className="text-slate-500 transform" />
                  </div>
                  <div className="text-slate-500 text-sm font-bold font-inter">Light mode</div>
              </button>
              <button className="self-stretch px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex hover:bg-blue-200">
                  <div className="w-3 h-3 relative">
                        <FontAwesomeIcon icon={faFile} className="text-slate-500 transform" />
                  </div>
                  <div className="text-slate-500 text-sm font-bold font-inter">Documentation</div>
              </button>
              <button className="self-stretch px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex hover:bg-blue-200">
                  <div className="w-4 h-4 relative">
                    <FontAwesomeIcon icon={faMessage} className="text-slate-500 transform" />
                  </div>
                  <div className="text-slate-500 text-sm font-bold font-inter">Contactez-nous</div>
              </button>
          </div>
          <div className="self-stretch h-[0px] border border-blue-900"></div>
          <button className="text-blue-100 text-sm font-medium font-inter hover:text-blue-300">Se déconnecter</button>
      </div>
    </div>
  )
}
