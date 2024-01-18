interface HistoryScreenProps {
  setShowHistoryScreen: (value: boolean) => void;
  history: string[];
  setHistory: (value: string[]) => void;
}

export default function HistoryScreen({
  setShowHistoryScreen,
  history,
  setHistory,
}: HistoryScreenProps) {
  return (
    <div className="absolute text-2xl text-right text-gray-300 pr-3 bg-black/90 w-[23rem] h-full">
      <div className="relative">
        <ul className="pt-11">
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
        <div className="absolute top-0 left-0 flex gap-2">
          <button
            className="size-11 inline-flex items-center justify-center"
            onClick={() => setShowHistoryScreen(false)}
          >
            X
          </button>
          <button
            className="p-4 h-11 w-fit inline-flex items-center justify-center"
            onClick={() => setHistory([])}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}
