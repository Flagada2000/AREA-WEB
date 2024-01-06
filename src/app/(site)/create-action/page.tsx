import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProfileActionCard from "@/components/actions/ProfileActionCard";

export default function CreateAction() {
  return (
    // LEFT PART

    <div className="flex flex-line items-left gap-8">
      <div className="flex flex-col items-left gap-8">
        <div className="action-card">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-blue-100 text-3xl font-bold font-inter">
              Actions
            </div>
          </div>
          <input
            type="search-action"
            id="search-action"
            className="self-stretch h-10 px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex text-blue-800 text-opacity-80 text-base bg-blue-100 font-medium font-inter placeholder-blue-800"
            placeholder="Rechercher un service"
          />
          <div className="self-stretch pb-[30px] justify-center items-start gap-[15px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouveau tweet
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouvelle photo
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Live en direct
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouveau message d’un channel
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouveau message d’un channel
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouveau message d’un channel
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="action-card">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-blue-100 text-3xl font-bold font-inter">
              Réactions
            </div>
          </div>
          <input
            type="search-reaction"
            id="search-reaction"
            className="self-stretch h-10 px-5 py-2.5 bg-blue-100 rounded-[999px] justify-start items-center gap-[15px] inline-flex text-blue-800 text-opacity-80 text-base bg-blue-100 font-medium font-inter placeholder-blue-800"
            placeholder="Rechercher un service"
          />
          <div className="self-stretch pb-[30px] justify-center items-start gap-[15px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouveau tweet
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouvelle photo
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Live en direct
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-center gap-[15px] inline-flex">
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Envoyer un message sur Discord
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouveau message d’un channel
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
              <div className="self-stretch px-2.5 py-[15px] bg-blue-100 rounded-[33px] flex-col justify-center items-center gap-[15px] flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-6 h-6 rounded-[5px]"
                    src="https://via.placeholder.com/24x24"
                  />
                  <div className="grow shrink basis-0 text-blue-900 text-base font-bold font-inter">
                    Nouveau message d’un channel
                  </div>
                </div>
                <div className="self-stretch text-slate-500 text-xs font-normal font-inter">
                  Cette action est activée à chaque partage d'une nouvelle photo
                  sur ton compte Instagram.
                </div>
                <button className="self-stretch p-2.5 bg-blue-900 rounded-[999px] justify-center items-center gap-2.5 inline-flex hover:bg-blue-700">
                  <div className="text-blue-100 text-xs font-semibold font-inter">
                    Se connecter
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER PART */}

      <div className="w-[1148px] h-[900px] p-2.5 flex-col justify-center items-center gap-[30px] inline-flex">
        <div className="action-card-center">
          <div className="text-center text-blue-100 text-3xl font-bold font-inter">
            Action
          </div>
          <ProfileActionCard />
        </div>
        <div className="w-6 h-6 relative">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-blue-100 transform"
          />
        </div>
        <div className="action-card-center">
          <div className="text-center text-blue-100 text-3xl font-bold font-inter">
            Réaction
          </div>
          <div className="w-[460px] h-[180px] bg-blue-100 rounded-[33px] flex-col justify-center items-center flex">
            <div className="self-stretch px-2.5 py-[30px] bg-white justify-center items-center gap-[30px] inline-flex rounded-tl-[30px] rounded-tr-[30px]">
              <img
                className="w-[30px] h-[30px] rounded-[5px]"
                src="https://via.placeholder.com/30x30"
              />
              <div className="w-80 text-center text-blue-900 text-xl font-bold font-inter">
                Envoyer un message sur Discord
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 p-[15px] justify-center items-center gap-[15px] inline-flex">
              <img
                className="w-[60px] h-[60px] relative rounded-[999px]"
                src="https://via.placeholder.com/60x60"
              />
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-[15px] inline-flex">
                <div className="text-blue-900 text-xl font-bold font-inter">
                  Titre
                </div>
                <div className="text-blue-900 text-base font-medium font-inter">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="px-[30px] py-2.5 bg-blue-100 rounded-[999px] shadow backdrop-blur-[100px] justify-start items-center gap-2.5 inline-flex hover:bg-blue-700">
          <div className="text-blue-900 text-xl font-semibold font-inter leading-[30px] hover:text-white">
            Créer l’Action
          </div>
        </button>
      </div>

      {/* RIGHT PART */}

      <div className="w-[386px] h-[990px] pl-[30px] py-[30px] flex-col justify-right items-center gap-[30px] inline-flex">
        <div className="action-card-right">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-blue-100 text-3xl font-bold font-inter">
              Action
            </div>
          </div>
          <div className="self-stretch h-[269px] pb-[30px] flex-col justify-start items-center gap-[15px] flex">
            <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
              <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
                <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
                  Titre
                </div>
              </div>
              <div className="self-stretch h-[62px] px-[15px] py-2.5 justify-center items-center gap-[15px] inline-flex">
                <div className="grow shrink basis-0 text-center text-blue-900 text-base font-bold font-inter">
                  tweet-author
                </div>
              </div>
            </div>
            <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
              <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
                <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
                  Texte{" "}
                </div>
              </div>
              <div className="self-stretch h-[62px] px-[15px] py-2.5 justify-center items-center gap-[15px] inline-flex">
                <div className="grow shrink basis-0 text-center text-blue-900 text-base font-bold font-inter">
                  tweet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="action-card-right">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-blue-100 text-3xl font-bold font-inter">
              Réaction
            </div>
          </div>
          <div className="self-stretch h-[396px] pb-[30px] flex-col justify-start items-center gap-[15px] flex">
            <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
              <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
                <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
                  Titre{" "}
                </div>
              </div>
              <div className="self-stretch h-[62px] px-[15px] py-2.5 justify-center items-center gap-[15px] inline-flex">
                <div className="grow shrink basis-0 text-center text-blue-900 text-base font-bold font-inter">
                  Nouveau Tweet de name
                </div>
              </div>
            </div>
            <div className="w-[300px] h-28 bg-blue-100 rounded-[33px] flex-col justify-start items-center flex">
              <div className="self-stretch p-2.5 bg-blue-900 justify-center items-center gap-2.5 inline-flex rounded-tl-[30px] rounded-tr-[30px]">
                <div className="text-blue-100 text-base font-bold font-inter leading-[30px]">
                  Texte
                </div>
              </div>
              <div className="self-stretch h-[62px] px-[15px] py-2.5 justify-center items-center gap-[15px] inline-flex">
                <div className="grow shrink basis-0 text-center text-blue-900 text-base font-bold font-inter">
                  tweet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
