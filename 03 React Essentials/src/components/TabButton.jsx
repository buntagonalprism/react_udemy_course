export default function TabButton({onClick, isSelected, children}) {
  return (
    <li><button className={isSelected ? 'active': null} onClick={onClick}>{children}</button></li>
  )
}