import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";

export function SidebarNav() {
    return (
        <Stack
            spacing="12"
            align="flex-start"
        >
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} children="Dashboard" />
                <NavLink icon={RiContactsLine} children="Usuários" />
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} children="Formularios" />
                <NavLink icon={RiGitMergeLine} children="Automaçaõ" />
            </NavSection>

        </Stack>
    )
}