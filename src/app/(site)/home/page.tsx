import './home.css'
import Link from "next/link";
import Image from 'next/image'
import HomePageIMG from '../../../assets/img-homepage.png';

export default function Home() {
  return (
    <div className="w-full h-full rounded-[30px] flex-col justify-start items-center inline-flex">
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center flex">
          <div className="self-stretch h-[576px] px-[60px] pt-[180px] pb-[60px] flex-col justify-between items-center flex">
              <div className="self-stretch text-center text-blue-100 text-6xl font-extrabold font-inter">Automatisez votre Monde</div>
              <div className="self-stretch text-center text-blue-100 text-xl font-medium font-inter">Automatisez en un clic : connectez vos apps, appareils et services préférés.<br/>Commencez dès maintenant.</div>
              <Link href="/create-action">
                <button className="px-[30px] py-2.5 bg-blue-100 rounded-[999px] shadow flex-col justify-center items-center gap-2.5 flex hover:bg-blue-300">
                    <div className="text-center text-blue-900 text-xl font-semibold font-inter leading-[30px]">Créer une Action</div>
                </button>
              </Link>
          </div>
      </div>
        <div className="cards-container">
            <div className="home-card">
                <div className="self-stretch text-blue-100 text-3xl font-bold font-inter">Découvrez le pouvoir de l’automatisation</div>
                <div className="self-stretch text-blue-100 text-xl font-medium font-inter">Simplifiez votre quotidien avec des scénarios d'automatisation personnalisés. "Si ceci se produit, alors cela se déclenche" - c'est aussi simple que cela. Libérez du temps pour les choses qui comptent vraiment.</div>
                <Link href="/create-action">
                  <button className="px-[30px] py-2.5 bg-blue-100 rounded-[999px] shadow flex-col justify-center items-center gap-2.5 flex hover:bg-blue-300">
                      <div className="text-center text-blue-900 text-xl font-semibold font-inter leading-[30px]">Commencer maintenant</div>
                  </button>
                </Link>
            </div>
            <Image className="image" src={HomePageIMG} alt="Description"/>
        </div>
    </div>
  )
}
