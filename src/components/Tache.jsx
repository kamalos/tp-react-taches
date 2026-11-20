function Tache({ titre, terminee }) {
    const tacheClass = terminee ? "tache terminee" : "tache"
    const tacheIcon = terminee ? "✅" : "⬜"
    return (
        <li className={tacheClass} >
            <span className="titre">{titre}</span>
            <span>{tacheIcon}</span>
        </li>
    )
}

export default Tache
