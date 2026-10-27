import "./Loading.css";

const Loading = () => {
  return (
    <main className="loading-page" role="status" aria-live="polite">
      <div className="loading-content">
        <div className="loading-spinner" aria-hidden="true">
          <span />
        </div>
        <p className="loading-brand">FoodWayzz</p>
        <h1>Good things are on the way</h1>
        <p className="loading-message">
          We're getting everything ready for you.
        </p>
        <div className="loading-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  );
};

export default Loading;
