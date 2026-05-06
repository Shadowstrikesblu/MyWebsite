// Importer le texte depuis le fichier de données
import { PARCOURS_TEXTS } from '../../data/texts';
import Image from 'next/image';

export default function MonParcours() {
    return (
        <div >
            <h2 className="text-2xl font-semibold text-white mb-6">{PARCOURS_TEXTS.title}</h2>
            
            <div className="space-y-8">
                {/* Section Formation */}
                <div>
                    {/* <h3 className="text-xl font-medium text-gray-800 mb-3">{PARCOURS_TEXTS.education.title}</h3> */}
                    <p className="text-gray-100 leading-relaxed">
                        {PARCOURS_TEXTS.education.content}
                    </p>
                </div>

                {/* Section Expérience */}
                <div>
                    {/* <h3 className="text-xl font-medium text-gray-800 mb-3">{PARCOURS_TEXTS.experience.title}</h3> */}
                    <p className="text-gray-100 leading-relaxed">
                        {PARCOURS_TEXTS.experience.content}
                    </p>
                </div>
                <div className="text-center">
                { 
                <div className="relative w-64 h-64 mx-auto mb-4">
                    <Image
                    src="/Lycee.png"
                    alt="Dominique Savio"
                    fill
                    className=""
                    priority
                    />
                </div>
                }      
                <p className="mt-4 text-gray-100 italic">
                    "{PARCOURS_TEXTS.experience.title}"
                </p>
                </div>
            </div>
        </div>
    );
}