import AwardItem from "./shared/AwardItem";

const awards = [
  { year: "2025", title: "Interior studio of the year" },
  { year: "2025", title: "Modern Luxury Interiors studio of the year" },
  { year: "2025", title: "Best luxury design" },
  { year: "2025", title: "Residential design interior design awards" },
  { year: "2025", title: "Residential interior design of the year" },
];

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards__inner">
        <div className="awards__left">
          <div className="awards__kicker">AWARDS</div>
          <div className="awards__logo">
            <svg
              className="awards__logo-icon"
              width="38"
              height="28"
              viewBox="0 0 38 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 25V12L11.5 3L19 10L26.5 3L36 12V25"
                stroke="#000"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect x="17" y="17" width="4" height="8" fill="#000" />
            </svg>
            <span className="awards__logo-text">
              Bueno Architecture Award | 2025
            </span>
          </div>
        </div>

        <div className="awards__right">
          {awards.map((item, index) => (
            <AwardItem key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .awards {
          background: #f8f8f8;
          color: #000;
          padding: 80px 24px;
        }

        .awards__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }

        .awards__kicker {
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .awards__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 140px;
        }

        .awards__logo-text {
          font-size: 14px;
        }

        .awards__row {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid #e5e5e5;
          transition: transform 0.3s ease;
        }

        .awards__row:hover {
          transform: translateX(5px);
        }

        .awards__year {
          color: #666;
          font-size: 16px;
          min-width: 70px;
        }

        .awards__title {
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          max-width: 520px;
        }

        @media (max-width: 900px) {
          .awards__inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .awards__logo {
            margin-top: 32px;
          }
        }

        @media (max-width: 600px) {
          .awards__row {
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Awards;
