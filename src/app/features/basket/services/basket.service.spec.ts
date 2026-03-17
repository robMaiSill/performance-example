import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { BasketService } from './basket.service';
import { Trip } from '@trip/models';

describe('BasketService', () => {
  let service: BasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty basket', () => {
    expect(service.selectAll()()).toEqual([]);
    expect(service.getCount()()).toBe(0);
  });

  it('should add item to basket', () => {
    const trip: Trip = {
      header: 'trip',
      content: [],
      id: 1,
      from: new Date(),
      to: new Date(),
      price: 50,
    };

    service.add(trip);

    expect(service.selectAll()()).toContain(trip);
    expect(service.getCount()()).toBe(1);
  });

  it('should add multiple items to basket', () => {
    const trip1: Trip = {
      header: 'trip',
      content: [],
      id: 1,
      from: new Date(),
      to: new Date(),
      price: 50,
    };

    const trip2: Trip = {
      header: 'trip',
      content: [],
      id: 1,
      from: new Date(),
      to: new Date(),
      price: 45,
    };

    service.add(trip1);
    service.add(trip2);

    expect(service.selectAll()()).toHaveLength(2);
    expect(service.getCount()()).toBe(2);
    expect(service.selectAll()()).toEqual([trip1, trip2]);
  });

  it('should maintain signal reactivity', () => {
    const trip: Trip = {
      header: 'trip',
      content: [],
      id: 1,
      from: new Date(),
      to: new Date(),
      price: 50,
    };

    const countSignal = service.getCount();
    expect(countSignal()).toBe(0);

    service.add(trip);
    expect(countSignal()).toBe(1);

    service.add(trip);
    expect(countSignal()).toBe(2);
  });
});
