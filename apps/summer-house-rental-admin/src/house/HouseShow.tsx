import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { HOUSE_TITLE_FIELD } from "./HouseTitle";
import { RENTER_TITLE_FIELD } from "../renter/RenterTitle";
import { OWNER_TITLE_FIELD } from "../owner/OwnerTitle";

export const HouseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="owner" source="owner.id" reference="Owner">
          <TextField source={OWNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="pricePerNight" source="pricePerNight" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Rental" target="houseId" label="Rentals">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <ReferenceField label="house" source="house.id" reference="House">
              <TextField source={HOUSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="renter"
              source="renter.id"
              reference="Renter"
            >
              <TextField source={RENTER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
