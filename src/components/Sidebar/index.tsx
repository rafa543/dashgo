import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
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
        </Box>
    )
}