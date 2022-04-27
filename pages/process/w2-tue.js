import NavigationProcessDay from "../../components/NavigationProcessDay";
import Image from "next/image";
import Link from "next/link";


export default function ProcessDay() {
  return (
    <>
      <NavigationProcessDay pageTitle={"Week 2 | Tuesday"} />
      <div className=" w-[700px] m-auto text-justify py-12">
        <h1 className="font-bold text-2xl">Noumenon von Laura Gyr</h1>
        <div className="h-4"></div>
        <Image src={`/w2-tue-1.jpg`} height="606" width="429" alt="Noumenon" layout="responsive"/>
        <p className="pt-4 leading-loose">Jeder Mensch hat seinen persönlichen, unverwechselbaren Charakter. Dieses Projekt von Laura Gyr ist ein Versuch, die verschiedenen individuellen Charakterzüge eines Menschen hervorzubringen und mit Farben und Formen visuell darzustellen. Anhand der Antworten eines kurzen Fragebogens erkennt der Algorithmus gewisse Tendenzen zu bestimmten Charakterzügen und passt entsprechend in Echtzeit die Illustration an. Die DI Alumni <a className="underline" href="https://lauragyr.ch/" target="_blank">Laura Gyr</a> hat sich in ihrer Bachelorarbeit mit der Psychoanalyse in interaktiven Installationen befasst und als Teil davon dieses Projekt erstellt. Das Projekt wurde ausserdem für den Alumni Award der HSLU nominiert und 2019 auf der Design Biennale in Zürich ausgestellt, wo man sich anschliessend das Bild herunterladen oder auch direkt drucken lassen konnte, um es mit nach Hause zu nehmen. </p>
        <div className="h-4"></div>
        <Image src={`/w2-tue-2.jpg`} height="667" width="1000" alt="Noumenon" layout="responsive"/>
        <p className="pt-4 leading-loose">Ihr Ziel mit dieser Arbeit war unter anderem es, sich und auch andere Menschen mit der Thematik der Psychoanalyse näherzubringen. Aus dem Grund hat sie nach einem Weg gesucht, abstrakte Konzepte wie persönliche Gefühle und Verhaltensweisen greifbarer zu machen. Ähnlich wie andere psychologische Modelle, wie das der sogenannten Big 5, hat Laura ein eigenes Modell auf Basis von 5 Skalen erstellt: das Denkverhalten, die Selbsteinschätzung, die Kommunikation, das Verhalten und die eigenen Gefühle. Sie hat dazu einen Fragebogen konzipiert, mit welchem sie die Probanden auf den obengenannten Skalen einordnen kann. Anschliessend wird auf Basis der gegebenen Antworten von einem Computerskript dynamisch ein Bild erstellt.</p>
        <p className="pt-4 leading-loose">Es wurde versucht, anhand von mehreren grafischen Eigenschaften einen visuellen Bezug zu den Fragebogenresultaten zu erstellen. So verändert sich zum Beispiel je nach Antwort, bezogen auf das Verhalten die Form der Elemente. Bei sanfteren Charakterzügen sind die Formen allgemein runder, während barsches Verhalten eher zu kantigen Formen führt. Mit demselben Prinzip zeigt das Bild mit der Position und Grösse der Elemente deine Extro- oder Introversion, mit der Farbsättigung die Selbsteinschätzung und mit den Farben deine allgemeine Gefühlslage. Dadurch entsteht bei jedem ein unterschiedliches Bild, welches in gewissermasse deine Psyche in Form von Daten, Pixeln und Farben widerspiegelt.</p>
        <a className="pt-4 block underline" href="https://www.designbiennalezurich.ch/2019/noumenon" target="_blank">Austellung Biennale Zürich 2019</a>
        <a className="block underline" href="https://noumenon.lauragyr.ch/index.html" target="_blank">Link zum Noumenon Creator</a>

        <div className="h-4"></div>
        <Image src={`/w2-tue-3.jpg`} height="1357" width="1178" alt="Noumenon" layout="responsive"/>
        <div className="h-4"></div>
        <Image src={`/w2-tue-4.jpg`} height="1600" width="1308" alt="Noumenon" layout="responsive"/>
        <div className="h-4"></div>
        <Image src={`/w2-tue-5.jpg`} height="1000" width="1000" alt="Noumenon" layout="responsive"/>
        <p className="leading-loose">-mein persönliches Noumenon</p>

      </div>
    </>
  );
}
