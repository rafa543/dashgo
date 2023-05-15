import { Icon, Link as ShakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from 'react'
import Link from 'next/link'

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <Link href={href} passHref>
            <ShakraLink display="flex" alignContent="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ShakraLink>
        </Link>
    )
}