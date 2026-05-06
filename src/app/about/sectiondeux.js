// Importer le texte depuis le fichier de données
import { PARCOURS_TEXTS, SECOND_SECTION } from '../../data/texts';
import Image from 'next/image';

export default function SectionDeux() {
    return (
        <div >
            <div className="space-y-8">
                {/* Section Formation */}
                <div>
                    {/* <h3 className="text-xl font-medium text-gray-800 mb-3">{PARCOURS_TEXTS.education.title}</h3> */}
                    <p className="text-gray-100 leading-relaxed">
                        {SECOND_SECTION.title}
                    </p>
                </div>

                {/* Section Expérience */}
                <div>
                    {/* <h3 className="text-xl font-medium text-gray-800 mb-3">{PARCOURS_TEXTS.experience.title}</h3> */}
                    <p className="text-gray-100 leading-relaxed">
                        {SECOND_SECTION.content}
                    </p>
                </div>
                <div className="text-center">
                { 
                <div className="relative w-64 h-64 mx-auto mb-4">
                    <Image
                    src="/vc.jpg"
                    alt="Valentine Charrondière"
                    fill
                    className=""
                    priority
                    />
                </div>
                }      
                <p className="mt-4 text-gray-100 italic">
                    "{SECOND_SECTION.alt}"
                </p>
                </div>
            </div>
        </div>
    );
}