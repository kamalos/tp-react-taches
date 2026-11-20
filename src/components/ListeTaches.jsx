function ListeTaches() {
  return (
    <>
      <ul className="liste-taches">
        <li className="tache">
            <span className="titre">Comprendre les composants</span>
        </li>
        <li className="tache terminee">
            <span className="titre">Comprendre les hooks</span>
        </li>
        <li className="tache">
            <span className="titre">Comprendre les states</span>
        </li>
      </ul>
    </>
  )
}

export default ListeTaches
