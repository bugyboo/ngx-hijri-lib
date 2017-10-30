import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HijriService } from './ngx-hijri.service';
import { ToHijriPipe, ToGregorianPipe } from './ngx-hijri.pipe';

describe('Testing Hijri Pipes', () => {

    const hijriService = new HijriService();
    const _toHijri = new ToHijriPipe(hijriService);

    it('should transform date to hijri without format and splitter', () => {
        expect(_toHijri.transform('30102017', null, null)).toBe('10/2/1439');
    });

    it('should transform date to hijri without format', () => {
        expect(_toHijri.transform('25/3/1990', '/', null)).toBe('28/8/1410');
    });

    it('should transform date to hijri', () => {
        expect(_toHijri.transform('25-10-1966', '-', 'full')).toBe('11 Rajab(7) 1386 H');
    });

    it('should transform wrong date hijri', () => {
        expect(_toHijri.transform('25-10-500', '-', 'scifi')).toContain('NaN');
    });

    const _toGreg = new ToGregorianPipe(hijriService);

    it('should transform date to Gregorian without format and splitter', () => {
        expect(_toGreg.transform('10021439', null, null)).toBe('30102017');
    });

    it('should transform date to Gregorian without format', () => {
        expect(_toGreg.transform('28/8/1410', '/', null)).toBe('25/3/1990');
    });

    it('should transform date to Gregorian', () => {
        expect(_toGreg.transform('11-7-1386', '-', 'plain')).toBe('25-10-1966');
           // toBe(new Date(1966, 9, 25, 3, 0, 0, 0));
    });

    it('should transform wrong date splitter to gregorian to be falsy', () => {
        expect(_toGreg.transform('11-7-1386', '/', 'full')).toBeFalsy();
    });

});
