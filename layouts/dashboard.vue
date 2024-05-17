<template>
    <div>
        <nav>
            <SidebarNavbar/>
        </nav>
        
        <main>
            <slot />
        </main>
        <Toast />
        <SidebarDashboardSidebar/>
    </div>
</template>