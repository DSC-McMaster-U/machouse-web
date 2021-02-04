import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import { incomingFinances, outgoingFinances } from "../sampleData";

const FinancesTable = () => {
  //page one is for incoming, page 2 is for outgoing
  const [pageNumber, setpageNumber] = useState(0);

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          padding: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {pageNumber === 0 ? "Outgoing" : "Incoming"}
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Amount</DataTable.Title>
        </DataTable.Header>

        {(pageNumber === 0 ? outgoingFinances : incomingFinances).map(
          (elem) => {
            return (
              <DataTable.Row key={elem.id}>
                <DataTable.Cell>{elem.date}</DataTable.Cell>
                <DataTable.Cell>{elem.name}</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${elem.amount.toFixed(2)}
                </DataTable.Cell>
              </DataTable.Row>
            );
          }
        )}

        <DataTable.Pagination
          page={pageNumber}
          numberOfPages={2}
          onPageChange={(page) => {
            console.log(page);
            setpageNumber((prev) => {
              return prev == 0 ? 1 : 0;
            });
          }}
          label={`Page ${pageNumber + 1} of 2`}
        />
      </DataTable>
    </View>
  );
};

export default FinancesTable;
