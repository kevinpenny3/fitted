import React from "react"
import { ClothingProvider } from "../clothing/ClothingProvider";
import { ClothingTypeProvider } from "../clothing/ClothingTypeProvider";
import { UserProvider } from "../users/userProvider";

export default props => {
  return (
    <>
      <ClothingProvider>
          <ClothingTypeProvider>
            <UserProvider>
                {props.children}
            </UserProvider>
          </ClothingTypeProvider>
      </ClothingProvider>

    </>
  );
};