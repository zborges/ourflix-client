function MovieCard(title, description) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p>{title}</p>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
