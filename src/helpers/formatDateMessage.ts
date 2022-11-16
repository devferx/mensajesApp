export function formatDateMessage(dateString: string) {
  const date = new Date(dateString);

  const res = new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

  return res.split(", ").reverse().join(" | ");
}
