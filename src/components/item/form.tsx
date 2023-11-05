import React, { useState } from "react";
import Button from "../button";
import { CloseIcon } from "../icons/close";
import { SaveIcon } from "../icons/save";
import Input from "../input";
import { Styles } from "./styles";
import { IItem } from "../../interfaces/IItem";
import { useAppContext } from "../../context/hook";

const ItemForm = ({ ...item }: IItem) => {
    const { toggleIsEditing, editItem } = useAppContext();

    const [formState, setFormState] = useState(item);

    const { nickname = "", whatsapp = "", age = "", id } = formState || {};

    return (
        <>
            <Input
                name="nickname"
                placeholder="Nome"
                onChangeText={(v) =>
                    setFormState((old: any) => ({ ...old, nickname: v }))
                }
                value={nickname}
                autoFocus
            />

            <Input
                name="age"
                placeholder="Idade"
                type="number"
                onChangeText={(v) =>
                    setFormState((old: any) => ({ ...old, age: ~~v }))
                }
                value={age}
            />
            <Input
                name="whatsapp"
                placeholder="Whatsapp"
                type="number"
                onChangeText={(v) =>
                    setFormState((old: any) => ({ ...old, whatsapp: v }))
                }
                value={whatsapp}
            />

            <Styles.GroupButtons>
                <Button onClick={() => editItem(formState)}>
                    <SaveIcon />
                </Button>
                <Button onClick={() => toggleIsEditing(id)}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    );
};

export default ItemForm;
