import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OWNER_TITLE_FIELD } from "../owner/OwnerTitle";

export const HouseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Houses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="owner" source="owner.id" reference="Owner">
          <TextField source={OWNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="pricePerNight" source="pricePerNight" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
