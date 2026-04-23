export default function showSpecial({ special }) {
  const result = special.map((obj) => {
    const { id, name, icon, description = "Описание недоступно" } = obj;

    return { id, name, icon, description };
  });

  return result;
}
