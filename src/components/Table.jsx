export default function Table() {
  return (
    <>
     <table className="w-full text-left border-collapse">
        <thead>
            <tr className="text-gray-500 border-b">
                <th className="py-2">Invoice</th>
                <th>Customer</th>
                <th>Ship</th>
                <th>Price</th>
                <th>Purchased Price </th>
                <th>Status;</th>
            </tr>
        </thead>
        <tr>
            <td>INV001</td>
            <td>Alice Johnson</td>
            <td>FedEx</td>
            <td>$250</td>
            <td>$200</td>
            <td>Paid</td>
        </tr>
        <tr>
            <td>INV002</td>
            <td>Brian Smith</td>
            <td>UPS</td>
            <td>$480</td>
            <td>$400</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td>INV003</td>
            <td>Carla Gomez</td>
            <td>DHL</td>
            <td>$320</td>
            <td>$280</td>
            <td>Shipped</td>
        </tr>
        <tr>
            <td>INV004</td>
            <td>David Lee</td>
            <td>Blue Dart</td>
            <td>$150</td>
            <td>$120</td>
            <td>Cancelled</td>
        </tr>

     </table>
    </>
  );
}