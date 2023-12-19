import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function CreateAction() {
  return (
    <div className="flex flex-col items-left gap-8">
        <div className="w-[356px] h-[450px] px-[15px] py-[30px] bg-gradient-to-l from-white to-blue-900 rounded-tr-[30px] rounded-br-[30px] shadow backdrop-blur-[100px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-scroll">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <div className="text-blue-100 text-3xl font-bold font-inter">Actions</div>
          </div>
          <div className="self-stretch h-10 px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex">
          <div className="w-6 h-6 relative">
            <FontAwesomeIcon icon={faSearch} className="absolute text-blue-800 text-opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
              <div className="text-blue-800 text-opacity-80 text-base font-medium font-inter">Rechercher un service</div>
          </div>
          <div className="self-stretch pb-[30px] justify-center items-start gap-[15px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau tweet</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouvelle photo</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Live en direct</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau message d’un channel</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau message d’un channel</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau message d’un channel</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
              </div>
          </div>
      </div>



      <div className="w-[356px] h-[450px] px-[15px] py-[30px] bg-gradient-to-l from-white to-blue-900 rounded-tr-[30px] rounded-br-[30px] shadow backdrop-blur-[100px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-scroll">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <div className="text-blue-100 text-3xl font-bold font-inter">Réactions</div>
          </div>
          <div className="self-stretch h-10 px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex">
              <div className="w-6 h-6 relative"></div>
              <div className="text-blue-800 text-opacity-80 text-base font-medium font-inter">Rechercher un service</div>
          </div>
          <div className="self-stretch pb-[30px] justify-center items-start gap-[15px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau tweet</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouvelle photo</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Live en direct</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau message d’un channel</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau message d’un channel</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
                  <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[15px] flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                      <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">Nouveau message d’un channel</div>
                    </div>
                    <div className="self-stretch text-slate-500 text-xs font-normal font-inter">Cette action est activée à chaque partage d'une nouvelle photo sur ton compte Instagram.</div>
                    <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                      <div className="text-blue-100 text-xs font-semibold font-inter">Se connecter</div>
                    </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}
