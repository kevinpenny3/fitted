import React from "react"
import { ClothingProvider } from "../clothing/ClothingProvider";
import { ClothingTypeProvider } from "../clothing/ClothingTypeProvider";
import { UserProvider } from "../users/userProvider";
import { StyleProvider } from "../styles/StyleProvider";
import { OutfitProvider } from "../outfits/OutfitProvider";
import { ClothingOutfitProvider } from "../outfits/ClothingOutfitProvider";

export default props => {
  return (
    <>
      <ClothingProvider>
        <StyleProvider>
          <OutfitProvider>
            <ClothingOutfitProvider>
              <ClothingTypeProvider>
                <UserProvider>
                  {props.children}
                </UserProvider>
              </ClothingTypeProvider>
            </ClothingOutfitProvider>
          </OutfitProvider>
        </StyleProvider>
      </ClothingProvider>

    </>
  );
};