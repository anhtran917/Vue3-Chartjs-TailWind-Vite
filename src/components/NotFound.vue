<template>
<div class="d-flex justify-content-center vh-100">
    <div class="text-center row">
        <div class=" col-md-6">
            <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg" alt="Page Not Found" class="img-fluid">
        </div>
        <div class=" col-md-6" style="margin-top: 6rem;">
            <p class="fs-3"> <span class="text-danger">Oops!</span> Page not found.</p>
            <p class="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <router-link to="/" class="btn btn-primary btn-lg p-2">
                <i class="fa fa-home" aria-hidden="true"></i> Go Home
            </router-link>
            
        </div>

    </div>
</div>
</template>