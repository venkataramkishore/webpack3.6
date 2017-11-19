export const BASIC_HEADERS = {
    brand: "Application",
    appMenu: [
        {
            name: "Home",
            href: "home",
            url: "/welcome",
            active: false,
            show: true,
            isAuthRequired: false
        },
        {
            name: "Auth",
            href: "auth",
            url: "",
            active: false,
            show: false,
            isAuthRequired: false
        }
    ],
    userMenu: [
        {
            name: "User",
            href: "user",
            url: "/profile",
            active: false,
            show: true,
            isAuthRequired: false
        }
    ]
};
