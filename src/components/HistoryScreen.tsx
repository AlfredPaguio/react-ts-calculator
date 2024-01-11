interface HistoryScreenProps {
  setShowHistoryScreen: (value: boolean) => void;
}

export default function HistoryScreen({
  setShowHistoryScreen,
}: HistoryScreenProps) {
  return (
    <div className="absolute text-2xl text-right text-gray-300 pr-3 bg-black/90 w-[23rem] h-full">
      <div className="relative">
        24 + 24
        <br />
        = 40
        <br />
        <br />
        50 + 54545
        <br />= 999
        <button
          className="absolute size-11 border-black border rounded-md h-11 top-0 left-0 bg-red-500"
          onClick={() => setShowHistoryScreen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}
