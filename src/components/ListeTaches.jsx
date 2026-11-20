import Tache from "./Tache"

function ListeTaches({ taches }) {
  return (
    <>
      <ul className="liste-taches">
        {
            taches.length > 0 ?
            taches.map(
                ({ id, titre, terminee }) => <Tache key={id} titre={titre} terminee={terminee} />
            )
            : <p className="vide">Aucune tâche à afficher.</p>
        } 
      </ul>
    </>
  )
}

export default ListeTaches
