import sortIcon from '../../assets/Icons/sort-24px.svg';

export const WarehouseTableHeader = ({ sortTable }) => {
  return (
    <div className="warehouse-main__heading-container">
      <p
        className="warehouse-main__table-heading warehouse-main__table-heading--item"
        onClick={() => {
          sortTable('name');
        }}
      >
        WAREHOUSE
        <img src={sortIcon} alt="" />
      </p>
      <p
        className="warehouse-main__table-heading warehouse-main__table-heading--address"
        onClick={() => {
          sortTable('address');
        }}
      >
        ADDRESS
        <img src={sortIcon} alt="" />
      </p>
      <p
        className="warehouse-main__table-heading warehouse-main__table-heading--name"
        onClick={() => {
          sortTable('contact', 'name');
        }}
      >
        CONTACT NAME
        <img src={sortIcon} alt="" />
      </p>
      <p
        className="warehouse-main__table-heading warehouse-main__table-heading--info"
        onClick={() => {
          sortTable('contact', 'phone');
        }}
      >
        CONTACT INFORMATION <img src={sortIcon} alt="" />
      </p>
      <p className="warehouse-main__table-heading">ACTIONS</p>
    </div>
  );
};
