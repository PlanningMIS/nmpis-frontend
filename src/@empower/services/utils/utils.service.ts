import { Injectable } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class EmpowerUtilsService {

    constructor(private router: Router){}
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the equivalent "IsActiveMatchOptions" options for "exact = true".
     */
    get exactMatchOptions(): IsActiveMatchOptions {
        return {
            paths: 'exact',
            fragment: 'ignored',
            matrixParams: 'ignored',
            queryParams: 'exact',
        };
    }

    /**
     * Get the equivalent "IsActiveMatchOptions" options for "exact = false".
     */
    get subsetMatchOptions(): IsActiveMatchOptions {
        return {
            paths: 'subset',
            fragment: 'ignored',
            matrixParams: 'ignored',
            queryParams: 'subset',
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Generates a random id
     *
     * @param length
     */
    randomId(length: number = 10): string {
        const chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let name = '';

        for (let i = 0; i < 10; i++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return name;
    }


    // apiErrorHandler(err: any) {
    //     if (err && err.status == 401 && err.error.error) {
    //       this.error(err.error.error);
    //       this.router.navigateByUrl('/login');
    //       return false;
    //     }
    //     if (err && err.status == 500 && err.error.error) {
    //       this.error(err.error.error);
    //       return false;
    //     }
    //     if (err.status == -1) {
    //       this.error(this.translate('Failed To Connect With Server'));
    //     } else if (err.status == 401) {
    //       this.error(this.translate('Unauthorized Request!'));
    //       this.router.navigateByUrl('/login');
    //     } else if (err.status == 500) {
    //       if (err.status == 500 && err.error && err.error.message) {
    //         this.error(err.error.message);
    //         return false;
    //       }
    //       this.error(this.translate('Something went wrong'));
    //     } else if (err.status == 422 && err.error.error) {
    //       this.error(err.error.error);
    //     } else {
    //       this.error(this.translate('Something went wrong'));
    //     }
    
    //   }

    // downloadFile(data: any, filename = 'data', keys: any) {
    //     let csvData = this.ConvertToCSV(data, keys);
    //     let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    //     let dwldLink = document.createElement("a");
    //     let url = URL.createObjectURL(blob);
    //     let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    //     if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
    //       dwldLink.setAttribute("target", "_blank");
    //     }
    //     dwldLink.setAttribute("href", url);
    //     dwldLink.setAttribute("download", filename + ".csv");
    //     dwldLink.style.visibility = "hidden";
    //     document.body.appendChild(dwldLink);
    //     dwldLink.click();
    //     document.body.removeChild(dwldLink);
    //   }

    // error(message: any) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: message,
    //       toast: true,
    //       showConfirmButton: false,
    //       timer: 2000,
    //       position: 'bottom-right'
    //     });
    //   }
    
    //   show() {
    //     this.spinner.show();
    //   }
    
    //   hide() {
    //     this.spinner.hide();
    //   }

    // success(message: any) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: message,
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
    //   }

    navigateToProfileClient(): void {
        this.router.navigate(['/apps/projects/client-profile']);
      }


    navigateCriteriaAccessment(): void {
        this.router.navigate(['/apps/projects/criteria-accessment']);
      }

    //   applyFilter(filteredData:any, ): void {
    //     const { startDate, endDate } = this.dateRangeForm.value;
    
    //     if (startDate && endDate) {
    //       filteredData = this.data.filter(item => {
    //         const itemDate = new Date(item.date).getTime();
    //         return (
    //           itemDate >= new Date(startDate).getTime() &&
    //           itemDate <= new Date(endDate).getTime()
    //         );
    //       });
    //     } else {
    //     //   filteredData = this.finance; // If no dates selected, show all data
    //     }
    //   }

    calculateYearDifference(startDate:any, completionDate:any) {
    
        if (startDate && completionDate) {
          const startYear = new Date(startDate).getFullYear();
          const completionYear = new Date(completionDate).getFullYear();
          const yearDifference = completionYear - startYear;

          return yearDifference
        }

        return null
      }
}
