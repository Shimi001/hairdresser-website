import { useEffect } from "react";

export function useScrollClose({ open, closeMenu }: { open: boolean; closeMenu: () => void }) {
    useEffect(() => {
        if (!open) return;

        const handleScroll = () => {
            closeMenu();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [open, closeMenu]);
}
