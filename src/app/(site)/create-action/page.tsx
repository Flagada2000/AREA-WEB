"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import CreateActionCard from "@/components/actions/CreateActionCard";
import ActionCardCreation from "@/components/actions/ActionCardCreation";
import EditActionCard from "@/components/actions/EditActionCard";
import { Action, Reaction } from "@/types/types";
import APIService from "@/service/service";
import ReactionCardCreation from "@/components/actions/ReactionCardCreation";
import GithubEditAction from "@/components/edit-actions/GithubEditAction";
import MailEditReaction from "@/components/edit-reactions/MailEditReaction";
import MailEditAction from "@/components/edit-actions/MailEditAction";

export default function CreateAction() {
  const apiService = new APIService();
  const [action, setAction] = useState<Action[] | null>(null);
  const [reaction, setReaction] = useState<Reaction[] | null>(null);

  async function fetchAction() {
    const action: Action[] = await apiService.getActions();
    setAction(action);
  }

  async function fetchReaction() {
    const reaction: Reaction[] = await apiService.getReactions();
    setReaction(reaction);
  }

  useEffect(() => {
    fetchAction();
  }, []);

  useEffect(() => {
    fetchReaction();
  }, []);

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
              {/* <ActionCardCreation /> */}
              {action?.map((action) => (
                <ActionCardCreation action={action} />
              ))}
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
              {/* <ActionCardCreation /> */}
              {reaction?.map((reaction) => (
                <ReactionCardCreation reaction={reaction} />
              ))}
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
          <CreateActionCard />
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
          <CreateActionCard />
        </div>
        <button className="px-[30px] py-2.5 bg-blue-100 rounded-[999px] shadow backdrop-blur-[100px] justify-start items-center gap-2.5 inline-flex hover:bg-blue-700">
          <div className="text-blue-900 text-xl font-semibold font-inter leading-[30px] hover:text-white">
            Créer l’Action
          </div>
        </button>
      </div>

      {/* RIGHT PART */}

      <div className="w-[386px] h-[990px] pl-[30px] py-[30px] flex-col justify-right items-center gap-[30px] inline-flex">
        {/* ACTION */}
        <GithubEditAction />
        {/* <MailEditAction /> */}


        {/* REACTION */}
        <MailEditReaction />
      </div>
    </div>
  );
}
