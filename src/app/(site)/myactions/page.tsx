"use client";
import "./myactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Action, User, UserAction } from "@/types/types";
import APIService from "../../../service/service";
import { useRouter } from "next/navigation";
import MyActionCard from "@/components/MyActionCard";
import MyExplorerCard from "@/components/MyExplorerCard";

export default function Home() {
  const apiService = new APIService();
  const [user, setUser] = useState<User | null>();
  const [actions, setActions] = useState<Action[] | null>();
  const [userActions, setUserActions] = useState<UserAction[] | null>();
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      const userData = await apiService.me();
      if (userData) {
        setUser(userData);
      } else {
        router.push("/signin");
      }
    } catch (error) {
      console.error(error);
      router.push("/signin");
    }
  };

  const fetchUserActions = async () => {
    const hardcodedUserActions: UserAction[] = [
      {
        id: 1,
        action_id: 1,
        user_id: "1",
        action_config: "ttest",
      },
      {
        id: 2,
        action_id: 2,
        user_id: "1",
        action_config: "ttest",
      },
    ];

    const hardcodedActions: Action[] = [
        {
            id: 1,
            action_name: "Nouveau caca",
            service_id: 1,
        },
        {
            id: 2,
            action_name: "Nouveau caca",
            service_id: 1,
        },
        ];

    setActions(hardcodedActions);
    setUserActions(hardcodedUserActions);
  };

  useEffect(() => {
    fetchUserData();
    fetchUserActions();
  }, []);

  useEffect(() => {
    console.log(user);
    console.log(user?.email);
  }, [user]);

  return (
    <div className="w-full h-full bg-slate-900 rounded-[30px] flex-col justify-start items-center inline-flex">
      <div className="self-stretch grow basis-0 flex-col justify-start items-center flex">
        <div className="self-stretch h-[200px] px-[60px] pt-[100px] pb-[60px] flex-col justify-between items-center flex">
          <div className="self-stretch text-center text-blue-100 text-6xl font-extrabold font-inter">
            Bonjour, {user ? user.email : "Loading..."}
          </div>
        </div>

        {/* MES ACTIONS */}

        <div className="pl-[60px] py-[30px] self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="text-center text-blue-100 text-3xl font-bold font-inter">
            Mes actions
          </div>
        </div>

        {/* ligne de "mes actions" */}
        <div className="scroll-container">
          <div className="justify-start items-center gap-[30px] inline-flex">
            {/* 1er carte action */}
            <div className="h-[319px] w-[319px] justify-center items-center gap-2.5 flex">
              <div className="grow basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <button className="group w-[30px] h-[30px] relative">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-gray-400 transform group-hover:text-blue-400"
                    />
                  </button>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="self-stretch text-blue-900 text-3xl font-bold font-inter">
                  Nouveau tweet
                </div>
                <div className="self-stretch h-[0px] border border-blue-900"></div>
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-[15px] flex">
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 eme carte action */}
            <div className="h-[319px] w-[319px] justify-center items-center gap-2.5 flex">
              <div className="grow basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <button className="group w-[30px] h-[30px] relative">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-gray-400 transform group-hover:text-blue-400"
                    />
                  </button>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="self-stretch text-blue-900 text-3xl font-bold font-inter">
                  Nouveau tweet
                </div>
                <div className="self-stretch h-[0px] border border-blue-900"></div>
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-[15px] flex">
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3eme carte action */}
            {userActions && actions ? <MyActionCard action={actions[0]} userAction={userActions[0]} /> : "Loading..."}
          </div>
        </div>

        {/* EXPLORER */}

        <div className="self-stretch h-full px-[60px] py-[15px] flex-col justify-start items-start gap-[30px] flex">
          <div className="w-full justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-blue-100 text-3xl font-bold font-inter">
              Explorer
            </div>
          </div>

          {/* premiere ligne */}
          <div className="self-stretch justify-center items-start gap-[30px] inline-flex">
            {/* 1ere carte action */}
            <div className="grow shrink basis-0 h-[319px] justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-[15px] flex">
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                  </div>
                </div>
                <div className="self-stretch text-blue-900 text-3xl font-bold font-inter">
                  Nouveau tweet
                </div>
                <div className="self-stretch h-[0px] border border-blue-900"></div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <button
                    className="h-[50px] px-[30px] py-2.5 bg-blue-900 rounded-[999px] justify-between items-center flex hover:bg-blue-400"
                    style={{ gap: "15px" }}
                  >
                    <div className="w-6 h-6 justify-center items-center flex">
                      <div className="w-6 h-6 relative">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="text-blue-100 transform"
                        />
                      </div>
                    </div>
                    <div className="text-blue-100 text-xl font-semibold font-inter leading-[30px]">
                      Ajouter
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 2eme carte action */}
            <MyExplorerCard />
          </div>

          {/* 2nde ligne */}
          <div className="self-stretch justify-center items-start gap-[30px] inline-flex">
            {/* 1ere carte action */}
            <div className="grow shrink basis-0 h-[319px] justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-[15px] flex">
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                  </div>
                </div>
                <div className="self-stretch text-blue-900 text-3xl font-bold font-inter">
                  Nouveau tweet
                </div>
                <div className="self-stretch h-[0px] border border-blue-900"></div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <button
                    className="h-[50px] px-[30px] py-2.5 bg-blue-900 rounded-[999px] justify-between items-center flex hover:bg-blue-400"
                    style={{ gap: "15px" }}
                  >
                    <div className="w-6 h-6 justify-center items-center flex">
                      <div className="w-6 h-6 relative">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="text-blue-100 transform"
                        />
                      </div>
                    </div>
                    <div className="text-blue-100 text-xl font-semibold font-inter leading-[30px]">
                      Ajouter
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 2eme carte action */}
            <div className="grow shrink basis-0 h-[319px] justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 self-stretch p-[30px] bg-blue-100 rounded-[30px] flex-col justify-center items-center gap-[30px] inline-flex">
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-[15px] flex">
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                    <img
                      className="w-[50px] h-[50px] rounded-[5px]"
                      src="https://via.placeholder.com/50x50"
                    />
                  </div>
                </div>
                <div className="self-stretch text-blue-900 text-3xl font-bold font-inter">
                  Nouveau tweet
                </div>
                <div className="self-stretch h-[0px] border border-blue-900"></div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <button
                    className="h-[50px] px-[30px] py-2.5 bg-blue-900 rounded-[999px] justify-between items-center flex hover:bg-blue-400"
                    style={{ gap: "15px" }}
                  >
                    <div className="w-6 h-6 justify-center items-center flex">
                      <div className="w-6 h-6 relative">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="text-blue-100 transform"
                        />
                      </div>
                    </div>
                    <div className="text-blue-100 text-xl font-semibold font-inter leading-[30px]">
                      Ajouter
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
