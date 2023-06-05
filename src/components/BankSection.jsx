import BankCard from "./BankCard";
import BankHeader from "./BankHeader";

const BankSection = () => {
  return (
    <section className="bank-section">
      <BankHeader />
      <BankCard />
    </section>
  );
};

export default BankSection;
