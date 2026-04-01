import AwardItem from "./shared/AwardItem";

const awards = [
  { year: "2025", title: "Interior studio of the year" },
  { year: "2025", title: "Modern Luxury Interiors studio of the year" },
  { year: "2025", title: "Best luxury design" },
  { year: "2025", title: "Residential design interior design awards" },
];

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards__inner">
        <div className="awards__left">
          <div className="awards__kicker">AWARDS</div>
        </div>

        <div className="awards__right">
          {awards.map((item, index) => (
            <AwardItem key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .awards {
          background: #ffffff;
          color: #000;
          padding: 80px 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .awards__inner {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          align-items: start;
        }

        .awards__kicker {
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
          margin-top: 20px;
        }

        .awards__row {
          display: flex;
          justify-content: flex-start;
          gap: 80px;
          padding: 30px 0;
          border-bottom: 1px solid #e5e5e5;
          transition: transform 0.3s ease;
        }

        .awards__row:first-child {
          border-top: 1px solid #e5e5e5;
        }

        .awards__row:hover {
          transform: translateX(5px);
        }

        .awards__year {
          color: #666;
          font-size: 15px;
          min-width: 60px;
        }

        .awards__title {
          font-size: 16px;
          font-weight: 400;
          text-align: left;
        }

        @media (max-width: 900px) {
          .awards__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .awards__row {
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Awards;
