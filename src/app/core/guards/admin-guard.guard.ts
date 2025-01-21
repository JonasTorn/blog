import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminService);
  const router = inject(Router);

  if (adminService.isAdmin) {
    return true; // Allow route activation
  } else {
    console.error('Access denied - Admins only');
    
    router.navigate(['/']); // Redirect unauthorized users to the home page
    return false;
  }
};
