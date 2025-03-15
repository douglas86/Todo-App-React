interface CheckboxItemProps {
  checkbox: { id: number; label: string; checked: boolean };
  onToggle: () => void;
  onDelete: () => void;
}

const CheckboxItem = ({ checkbox, onToggle, onDelete }: CheckboxItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={checkbox.checked} onChange={onToggle} />
      <label>{checkbox.label}</label>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default CheckboxItem;
