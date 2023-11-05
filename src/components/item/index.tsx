import React, { useState } from "react";
import Button from "../button";
import { PencilIcon } from "../icons/pencil";
import { TrashIcon } from "../icons/trash";
import ItemForm from "./form";
import { Styles } from "./styles";
import { AppContextActions } from "../../enums/AppContextActions";
import { IItem } from "../../interfaces/IItem";
import { useAppContext } from "../../context/hook";

interface IProps extends IItem {
    position: number;
}

const Item = ({
    position,
    nickname,
    whatsapp,
    age,
    id,
    isEditing = false,
}: IProps) => {
    const { deleteItem, toggleIsEditing } = useAppContext();

    return (
        <Styles.Container>
            <strong>{position}</strong>

            {isEditing ? (
                <ItemForm
                    {...{
                        nickname,
                        whatsapp,
                        age,
                        id,
                        isEditing,
                    }}
                />
            ) : (
                <>
                    <p>{nickname ?? <i>Inserir nome</i>}</p>
                    <p>{age ?? <i>Inserir idade</i>}</p>
                    <p>{whatsapp ?? <i>Inserir número</i>}</p>

                    <Styles.GroupButtons>
                        <Button onClick={() => toggleIsEditing(id)}>
                            <PencilIcon />
                        </Button>
                        <Button onClick={() => deleteItem(id)}>
                            <TrashIcon />
                        </Button>
                    </Styles.GroupButtons>
                </>
            )}
        </Styles.Container>
    );
};

export default Item;
